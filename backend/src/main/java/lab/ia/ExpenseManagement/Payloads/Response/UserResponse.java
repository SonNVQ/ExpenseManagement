package lab.ia.ExpenseManagement.Payloads.Response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {
    private String username;

    private String fullName;

    private String email;
}
