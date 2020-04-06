package com.talanweb3j.blockchain.controllers;

import com.talanweb3j.blockchain.model.Block;
import com.talanweb3j.blockchain.model.Transaction;
import com.talanweb3j.blockchain.services.MonotoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("MonotoringController")
public class MonotoringController {
    @Autowired
    MonotoringService monotoringService;

    @ResponseBody
    @GetMapping("getClientVersion")
        public String getClientVersion() throws IOException{
        System.out.println("attia attia");

        return monotoringService.getClientVersion();
    };
    @ResponseBody
    @GetMapping("getCreds")
    public Credentials getCreds() throws IOException, CipherException{
        return monotoringService.getCreds();
    };
    @ResponseBody
    @GetMapping("ethGetBlockByNumber")
    public BigInteger ethGetBlockByNumber() throws IOException{
        return monotoringService.ethGetBlockByNumber();
    };
    @ResponseBody
    @GetMapping("ethAccounts")
    public ArrayList<String> ethAccounts() throws IOException{
        return monotoringService.ethAccounts();
    };
    @ResponseBody
    @GetMapping("ethBlockNumber")
    public BigInteger ethBlockNumber() throws IOException{
       return monotoringService.ethBlockNumber();
    };
    @ResponseBody
    @GetMapping("ethProtocolVersion")
    public int ethProtocolVersion() throws IOException{
        return monotoringService.ethProtocolVersion();
    };
    @ResponseBody
    @GetMapping("ethGetBlockByHash")
    public BigInteger ethGetBlockByHash() throws IOException{
        return monotoringService.ethGetBlockByHash();
    };
    @ResponseBody
    @GetMapping("listBlock")
    public ArrayList<Block> listBlock() throws IOException{
        return monotoringService.listBlockDB();
    };
    @ResponseBody
    @GetMapping("listTransaction")
    public ArrayList<Transaction> listTransaction() throws IOException {

        return monotoringService.listTransactionDB();
    }

    @ResponseBody
    @GetMapping("Nodenumber")
    public BigInteger getNodenumber() throws IOException{
        return monotoringService.getNodenumber();
    }

    @ResponseBody
    @GetMapping("extractEnode")
    public String extractEnode(int nodeNumber) throws IOException, InterruptedException{
        return  monotoringService.extractEnode(nodeNumber);

    }
    @ResponseBody
    @GetMapping("createAccount/{password}")
    public String createAccount(int nodeNumber,@PathVariable(name="password") String password) throws IOException, InterruptedException{
    return monotoringService.createAccount(nodeNumber,password);
    }
    @ResponseBody
    @GetMapping("nodeInfo")
    public String nodeInfo(int nodeNumber) throws IOException, InterruptedException{
        return monotoringService.nodeInfo(nodeNumber);
    }
    @ResponseBody
    @GetMapping("getEnode")

    public String getEnode(int nodeNumber) throws IOException, InterruptedException{
        return monotoringService.getEnode(nodeNumber);
    }
    @ResponseBody
    @GetMapping("createNode")
    public String createNode() throws InterruptedException, IOException{
        return monotoringService.createNode();
    }

    @ResponseBody
    @GetMapping("getNodesCount")
    public int getNodesCount(){
        return monotoringService.getNodesCount();
    }

}
