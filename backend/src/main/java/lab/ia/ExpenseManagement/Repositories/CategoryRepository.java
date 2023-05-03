package lab.ia.ExpenseManagement.Repositories;

import lab.ia.ExpenseManagement.Models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
