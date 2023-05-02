package lab.ia.ExpenseManagement.Services.Impl;

import lab.ia.ExpenseManagement.Exceptions.AccessDeniedException;
import lab.ia.ExpenseManagement.Exceptions.BadRequestException;
import lab.ia.ExpenseManagement.Exceptions.UnauthorizedException;
import lab.ia.ExpenseManagement.Models.Enums.ERole;
import lab.ia.ExpenseManagement.Models.Role;
import lab.ia.ExpenseManagement.Models.User;
import lab.ia.ExpenseManagement.Payloads.Request.UserInfoRequest;
import lab.ia.ExpenseManagement.Payloads.Response.ApiResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserIdentityAvailabilityResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserResponse;
import lab.ia.ExpenseManagement.Repositories.RoleRepository;
import lab.ia.ExpenseManagement.Repositories.UserRepository;
import lab.ia.ExpenseManagement.Security.UserPrincipal;
import lab.ia.ExpenseManagement.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServerImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public UserResponse getCurrentUserInfo(UserPrincipal currentUser) {
        return new UserResponse(currentUser.getUsername(), currentUser.getFullName(), currentUser.getEmail());
    }

    @Override
    public UserIdentityAvailabilityResponse checkUsernameAvailable(String username) {
        boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailabilityResponse(isAvailable);
    }

    @Override
    public UserIdentityAvailabilityResponse checkEmailAvailable(String email) {
        boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailabilityResponse(isAvailable);
    }

    @Override
    public UserResponse updateUser(String username, UserPrincipal currentUser, UserInfoRequest newUserInfo) {
        User user = userRepository.getUserByUsername(username);
        if (user.getUsername().equals(currentUser.getUsername()) || currentUser.getAuthorities().contains(new SimpleGrantedAuthority(ERole.ROLE_ADMIN.toString()))) {
            user.setFullName(newUserInfo.getFullName());
            if (!user.getEmail().equals(newUserInfo.getEmail()) && userRepository.existsByEmail(newUserInfo.getEmail()))
                throw new BadRequestException(new ApiResponse(false, "Email is already taken!"));
            user.setEmail(newUserInfo.getEmail());
            userRepository.save(user);
            return new UserResponse(user.getUsername(), user.getFullName(), user.getEmail());
        }
        throw new UnauthorizedException(new ApiResponse(false, "You do not have access to take this action!"));
    }

    @Override
    public ApiResponse deleteUser(String username, UserPrincipal currentUser) {
        User user = userRepository.getUserByUsername(username);
        if (user.getUsername().equals(currentUser.getUsername()) || currentUser.getAuthorities().contains(new SimpleGrantedAuthority(ERole.ROLE_ADMIN.toString()))) {
            userRepository.deleteById(user.getId());
            return new ApiResponse(true, "Successfully deleted user " + username);
        }
        ApiResponse apiResponse = new ApiResponse(false, "You don't have permission to delete profile of: " + username);
        throw new AccessDeniedException(apiResponse);
    }

    @Override
    public ApiResponse giveRoleByUsername(String username, ERole role) {
        User user = userRepository.getUserByUsername(username);
        Set<Role> roles = user.getRoles();
        Role newRole = roleRepository.findByName(role).orElseThrow(() -> new RuntimeException("User role is not found!"));
        roles.add(newRole);
        user.setRoles(roles);
        userRepository.save(user);
        return new ApiResponse(true, String.format("Added role %s to user %s", role.toString(), username));
    }

    @Override
    public ApiResponse takeRoleByUsername(String username, ERole role) {
        User user = userRepository.getUserByUsername(username);
        Set<Role> roles = user.getRoles();
        Role newRole = roleRepository.findByName(role).orElseThrow(() -> new RuntimeException("User role is not found!"));
        roles.remove(newRole);
        user.setRoles(roles);
        userRepository.save(user);
        return new ApiResponse(true, String.format("Taken role %s from user %s", role.toString(), username));
    }
}
