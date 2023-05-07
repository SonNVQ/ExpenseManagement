package lab.ia.ExpenseManagement.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import lab.ia.ExpenseManagement.Payloads.Request.RecordRequest;
import lab.ia.ExpenseManagement.Payloads.Response.MessageResponse;
import lab.ia.ExpenseManagement.Security.CurrentUser;
import lab.ia.ExpenseManagement.Security.UserPrincipal;
import lab.ia.ExpenseManagement.Services.RecordServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/uploadFile")
public class uploadFileController {


    @Autowired
    RecordServer recordServer;

    @PostMapping("/records")
    public ResponseEntity<?> fileUpload(@CurrentUser UserPrincipal currentUser
                                        ,@RequestBody String file
                                         )    {
        //create ObjectMapper instance
        ObjectMapper objectMapper = new ObjectMapper();



        //read JSON file and convert to a customer object
//        List<RecordRequest> recordLi = List.of(objectMapper.readValue( file, RecordRequest[].class));
//        System.out.println(file+" asd ================== asd");

        try {
            List<RecordRequest> recordList = List.of(objectMapper.readValue( file, RecordRequest[].class));
            for (RecordRequest recordRequest : recordList){
                recordServer.addRecord( recordRequest, currentUser);

            }
        }
        catch (IOException e) {
            return ResponseEntity.ok(new MessageResponse("ERRRRORRRRRRRRRRRRR!!!!!!"));
        }
        System.out.println(  " end ================== end");
        return ResponseEntity.ok(new MessageResponse("Test!"));
//        try {
//                List <RecordRequest> recordList = (List<RecordRequest>) objectMapper.readValue((JsonParser) file, Record.class);
//                for (RecordRequest recordRequest : recordList){
//                    recordServer.addRecord( recordRequest, currentUser);
//                }
//                return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
//        } catch (IOException e) {
//                return ResponseEntity.ok(new MessageResponse("ERRRRORRRRRRRRRRRRR!!!!!!"));
//        }
    }
}