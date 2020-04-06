package com.talanweb3j.blockchain.services.impl;

import com.talanweb3j.blockchain.model.HelloWorld;
import com.talanweb3j.blockchain.services.SmartContractService;
import org.springframework.stereotype.Service;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.ManagedTransaction;


import java.io.IOException;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

@Service
public class SmartContractServiceImpl implements SmartContractService{
    Web3j web3j = Web3j.build(new HttpService());
    HelloWorld contract;
    @Override
    public Credentials getCreds(String address,String pass) throws IOException, CipherException {
        ArrayList<String> arrayList= listPathWallet();
        System.out.println("address"+address);
        for (int i=0 ;i<arrayList.size();i++)
        {try {


            if(arrayList.get(i).substring(37).equalsIgnoreCase(address)){
                return WalletUtils.loadCredentials(pass,"/home/attia/Desktop/Blockchain/noeud4/keystore/"+arrayList.get(i));
            }}catch (Exception e){}
        }

        return null;
    }

    @Override
    public ArrayList<String> listPathWallet() throws IOException {
        ArrayList<String > arrayList = new ArrayList<String>();
        Files.newDirectoryStream(Paths.get("/home/attia/Desktop/Blockchain/noeud4/keystore/"),
                path -> path.toString().endsWith(""))
                .forEach(e-> arrayList.add(e.toString().substring(47)));
        return arrayList;
    }

    @Override
    public String contractAddress() {
        return this.contract.getContractAddress();
    }

    @Override
    public HelloWorld deploy_contract(String adress,String pass) throws Exception {
        HelloWorld contract = HelloWorld.deploy(
                web3j, this.getCreds(adress,pass),
                ManagedTransaction.GAS_PRICE, BigInteger.valueOf(1000000)).send();
        return contract;
    }

    @Override
    public TransactionReceipt add_counter(String hash,String addr,String pass) throws Exception {
        HelloWorld contract = HelloWorld.load(
                hash, web3j, getCreds(addr,pass),ManagedTransaction.GAS_PRICE, BigInteger.valueOf(1000000));
        return contract.add().send();
    }

    @Override
    public TransactionReceipt substract_counter(String hash,String addr,String pass) throws Exception {
        HelloWorld contract = HelloWorld.load(
                hash, web3j, getCreds(addr,pass),ManagedTransaction.GAS_PRICE, BigInteger.valueOf(1000000));
        return contract.subtract().send();
    }

    @Override
    public BigInteger getcounter(String hash,String addr,String pass) throws Exception {
        HelloWorld contract = HelloWorld.load(
                hash, web3j, getCreds(addr,pass),ManagedTransaction.GAS_PRICE, BigInteger.valueOf(1000000));
        return contract.getCounter().send();
    }
}
