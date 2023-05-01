package lab.ia.ExpenseManagement.Services;

import lab.ia.ExpenseManagement.Payloads.Request.LoginRequest;
import lab.ia.ExpenseManagement.Payloads.Request.RegisterRequest;
import lab.ia.ExpenseManagement.Payloads.Response.JwtResponse;
import org.springframework.security.authentication.BadCredentialsException;

public interface AuthService {
    JwtResponse login(LoginRequest loginRequest) throws BadCredentialsException;

    void register(RegisterRequest registerRequest) throws Exception;
}
