package lab.ia.ExpenseManagement.Services;

import lab.ia.ExpenseManagement.Models.Enums.ERole;
import lab.ia.ExpenseManagement.Payloads.Request.UserInfoRequest;
import lab.ia.ExpenseManagement.Payloads.Response.ApiResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserIdentityAvailabilityResponse;
import lab.ia.ExpenseManagement.Payloads.Response.UserResponse;
import lab.ia.ExpenseManagement.Security.UserPrincipal;

public interface UserService {
    UserResponse getCurrentUserInfo(UserPrincipal currentUser);

    UserIdentityAvailabilityResponse checkUsernameAvailable(String username);

    UserIdentityAvailabilityResponse checkEmailAvailable(String password);

    ApiResponse updateUser(String username, UserInfoRequest newUserInfo);

    ApiResponse deleteUser(String username);

    ApiResponse giveRoleByUsername(String username, ERole role);

    ApiResponse takeRoleByUsername(String username, ERole role);
}
