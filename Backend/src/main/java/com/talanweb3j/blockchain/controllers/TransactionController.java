package com.talanweb3j.blockchain.controllers;

import com.talanweb3j.blockchain.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.admin.methods.response.NewAccountIdentifier;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.exceptions.TransactionException;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.concurrent.ExecutionException;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
    @RequestMapping("TransactionController")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping(value = "getCreds/{address}/{pass}")
    public Credentials getCreds(@PathVariable(name="address") String address,@PathVariable(name="pass") String pass) throws IOException, CipherException{
        return transactionService.getCreds(address,pass);
    };
    @GetMapping(value = "ethAccounts")
    public ArrayList<String> ethAccounts() throws IOException{
        return transactionService.ethAccounts();
    };
    @GetMapping(value = "sendtransaction/{from}/{to}/{pass}/{value}")
    public TransactionReceipt sendtransaction(@PathVariable(name = "from") String from, @PathVariable(name = "to") String to, @PathVariable(name = "pass") String pass, @PathVariable(name = "value") int value) throws IOException, CipherException, TransactionException, InterruptedException, ExecutionException{
       // String to="0xd65b9d77921f7973e419b0bb2d456ea7e0692725";
        //int value=1;
      //  String pass="123";

         return transactionService.sendtransaction(from,to,value,pass);
    };
    @GetMapping(value = "ethBalance/{hash}")
    public BigDecimal ethBalance(@PathVariable(name = "hash") String hash) throws IOException{
        return transactionService.ethBalance(hash);
    };

    @GetMapping(value = "getTransactionHash/{from}/{to}/{pass}/{value}")
    public String getTransactionHash(@PathVariable(name = "from") String from,@PathVariable(name = "to") String to,@PathVariable(name = "pass") String pass,@PathVariable(name = "value") int value) throws InterruptedException, ExecutionException, TransactionException, CipherException, IOException{
        return transactionService.getTransactionHash(from,to,value,pass);
    };

    @GetMapping(value = "Newwallet/{pass}")
    public NewAccountIdentifier Newwallet(@PathVariable String pass) throws IOException{
       // String pass="123";
        System.out.println("password: "+pass);
        return transactionService.Newwallet(pass);
    };
    @GetMapping(value = "connect/")
    public ArrayList<String> connect() throws IOException {
        ArrayList<String > arrayList = new ArrayList<String>();
            Files.newDirectoryStream(Paths.get("/home/attia/Desktop/Blockchain/noeud4/keystore/"),
                    path -> path.toString().endsWith(""))
                    .forEach(e-> arrayList.add(e.toString()));
        return arrayList;
    }
}
