package lab.ia.ExpenseManagement.Models;

import jakarta.persistence.*;
import lab.ia.ExpenseManagement.Models.Enums.ERecordType;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "records")
@NoArgsConstructor
@Getter
@Setter
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String note;

    @Column
    @Enumerated(EnumType.STRING)
    private ERecordType type;

    @Column
    private double amount;

    @DateTimeFormat(pattern = "dd/MM/yyyy hh:mm:ss")
    private Date date;

    @ManyToMany(mappedBy = "persons")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<Category> categories;

    public Record(String name, String note, ERecordType type, double amount, Date date, List<Category> categories) {
        this.name = name;
        this.note = note;
        this.type = type;
        this.amount = amount;
        this.date = date;
        this.categories = categories;
    }
}
