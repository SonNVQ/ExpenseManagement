package lab.ia.ExpenseManagement.Payloads.Request;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserInfoRequest {
    @Size(max = 255)
    private String fullName;

    @Size(max = 60)
    private String email;
}
