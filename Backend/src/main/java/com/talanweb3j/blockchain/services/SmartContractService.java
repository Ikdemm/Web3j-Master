package com.talanweb3j.blockchain.services;

import com.talanweb3j.blockchain.model.HelloWorld;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;

public interface SmartContractService {



    public Credentials getCreds(String adress, String pass) throws IOException, CipherException;
    public HelloWorld deploy_contract(String adress,String pass) throws Exception;
    public TransactionReceipt add_counter(String hash,String addr,String pass) throws Exception;
    public TransactionReceipt substract_counter(String hash,String addr,String pass) throws Exception;
    public BigInteger getcounter(String hash,String addr,String pass) throws Exception;
    public ArrayList<String> listPathWallet() throws IOException;
    public String contractAddress();
    }
