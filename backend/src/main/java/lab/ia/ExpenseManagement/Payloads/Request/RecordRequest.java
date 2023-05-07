package lab.ia.ExpenseManagement.Payloads.Request;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lab.ia.ExpenseManagement.Models.Enums.ERecordType;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class RecordRequest {
    @JsonProperty("name")
    private String name;

    @JsonProperty("note")
    private String note;

    @JsonProperty("type")
    private ERecordType type;


    @JsonProperty("amount")
    private Double amount;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonProperty("date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date;

    @JsonProperty("categories")
    private List<Long> categories;

    public boolean isValid() {
        if (name.isBlank() || type == null || amount == null || date == null || categories == null)
            return false;
        return true;
    }


}
