package lab.ia.ExpenseManagement.Services;

import lab.ia.ExpenseManagement.Models.Enums.ERole;
import lab.ia.ExpenseManagement.Models.User;
import lab.ia.ExpenseManagement.Payloads.Request.UserInfoRequest;
import lab.ia.ExpenseManagement.Payloads.Response.ApiResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserIdentityAvailabilityResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserResponse;
import lab.ia.ExpenseManagement.Security.UserPrincipal;

public interface UserService {
    UserResponse getCurrentUserInfo(UserPrincipal currentUser);

    UserIdentityAvailabilityResponse checkUsernameAvailable(String username);

    UserIdentityAvailabilityResponse checkEmailAvailable(String password);

    UserResponse updateUser(String username, UserPrincipal currentUser, UserInfoRequest newUserInfo);

    ApiResponse deleteUser(String username, UserPrincipal currentUser);

    ApiResponse giveRoleByUsername(String username, ERole role);

    ApiResponse takeRoleByUsername(String username, ERole role);
}
