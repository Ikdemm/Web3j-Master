package com.talanweb3j.blockchain.services.impl;

import com.talanweb3j.blockchain.services.TransactionService;
import org.springframework.stereotype.Service;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.admin.Admin;
import org.web3j.protocol.admin.methods.response.NewAccountIdentifier;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.exceptions.TransactionException;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.Transfer;
import org.web3j.utils.Convert;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.concurrent.ExecutionException;
@Service
public class TransactionServiceImpl implements TransactionService {
    Web3j web3j = Web3j.build(new HttpService());
    Admin admin = Admin.build(new HttpService());

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

    return null;}

    @Override
    public ArrayList<String> ethAccounts() throws IOException {
        return (ArrayList<String>) web3j.ethAccounts().send().getAccounts();
    }

    @Override
    public TransactionReceipt sendtransaction(String from,String to,int value,String pass) throws IOException, CipherException, TransactionException, InterruptedException, ExecutionException {
                return Transfer.sendFunds(
                web3j, this.getCreds(from,pass),
                to,  // you can put any address here
                BigDecimal.valueOf(value), Convert.Unit.ETHER)  // 1 wei = 10^-18 Ether
                .sendAsync().get();
    }

    @Override
    public BigDecimal ethBalance(String hash) throws IOException {
        BigInteger balance = web3j.ethGetBalance(hash, DefaultBlockParameterName.LATEST).send().getBalance();
        return Convert.fromWei(balance.toString(), Convert.Unit.ETHER);
    }

    @Override
    public String getTransactionHash(String from,String to,int value,String pass) throws InterruptedException, ExecutionException, TransactionException, CipherException, IOException {
        return this.sendtransaction(from ,to,value,pass).getTransactionHash();
    }
    @Override
    public NewAccountIdentifier Newwallet(String pass) throws IOException {
        return admin.personalNewAccount(pass).send();
    }
    @Override
    public ArrayList<String> listPathWallet() throws IOException {
        ArrayList<String > arrayList = new ArrayList<String>();
        Files.newDirectoryStream(Paths.get("/home/attia/Desktop/Blockchain/noeud4/keystore/"),
                path -> path.toString().endsWith(""))
                .forEach(e-> arrayList.add(e.toString().substring(47)));
        return arrayList;
}
}

