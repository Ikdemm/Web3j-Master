package com.talanweb3j.blockchain.controllers;

import com.talanweb3j.blockchain.model.HelloWorld;
import com.talanweb3j.blockchain.services.SmartContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("SmartContractController")
public class SmartContractController{
    @Autowired
    SmartContractService smartContractService;

    @ResponseBody
    @GetMapping("deploy/{address}/{pass}")
    public HelloWorld deploy_contract(@PathVariable(name="address") String address , @PathVariable(name="pass") String pass) throws Exception {
        System.out.println("deployed");
        return smartContractService.deploy_contract(address,pass);
    };
    @GetMapping(value = "getCreds/{address}/{pass}")
    public Credentials getCreds(@PathVariable(name="address") String adress,@PathVariable(name="pass") String pass) throws IOException, CipherException{
        return smartContractService.getCreds(adress,pass);
    };
    @ResponseBody
    @GetMapping("addcounter/{hash}/{addr}/{pass}")
    public TransactionReceipt add_counter(@PathVariable(name="hash") String hash ,@PathVariable(name="addr") String addr ,@PathVariable(name="pass") String pass) throws Exception{

        return this.smartContractService.add_counter(hash,addr,pass);
    };
    @ResponseBody
    @GetMapping("substractcounter/{hash}/{addr}/{pass}")
    public TransactionReceipt substract_counter(@PathVariable(name="hash") String hash ,@PathVariable(name="addr") String addr ,@PathVariable(name="pass") String pass) throws Exception{
        return this.smartContractService.substract_counter(hash,addr,pass);
    };
    @ResponseBody
    @GetMapping("getcounter/{hash}/{addr}/{pass}")
    public BigInteger getcounter(@PathVariable(name="hash") String hash ,@PathVariable(name="addr") String addr ,@PathVariable(name="pass") String pass) throws Exception{
        return this.smartContractService.getcounter(hash,addr,pass);
    };
    @ResponseBody
    @GetMapping("listPathWallet")
    public ArrayList<String> listPathWallet() throws IOException{
        return smartContractService.listPathWallet();
    };
    @ResponseBody
    @GetMapping("contractAddress")
    public String contractAddress(){
        return smartContractService.contractAddress();
    };
}