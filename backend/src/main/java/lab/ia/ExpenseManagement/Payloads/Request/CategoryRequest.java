package lab.ia.ExpenseManagement.Payloads.Request;

import lombok.Data;

@Data
public class CategoryRequest {
    private String name;

    private String description;
}
