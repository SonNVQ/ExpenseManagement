package lab.ia.ExpenseManagement.Payloads.Response;

import lab.ia.ExpenseManagement.Models.Enums.ERole;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
public class UserResponse {
    private String username;

    private String fullName;

    private String email;
}
