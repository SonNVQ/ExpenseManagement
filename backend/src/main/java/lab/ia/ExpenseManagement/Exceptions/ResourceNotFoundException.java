package lab.ia.ExpenseManagement.Exceptions;

import lab.ia.ExpenseManagement.Payloads.Response.ApiResponse;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
@Getter
@Setter
public class ResourceNotFoundException extends RuntimeException{
    private String resourceName;

    private String fieldName;

    private String fieldValue;

    private transient ApiResponse errorResponse;

    public ResourceNotFoundException(String resourceName, String fieldName, String fieldValue) {
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public void setErrorResponse() {
        this.errorResponse = new ApiResponse(false, String.format("%s not found with %s: %s", resourceName, fieldName, fieldValue));
    }
}
