package com.talanweb3j.blockchain.services;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.admin.methods.response.NewAccountIdentifier;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.exceptions.TransactionException;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

public interface TransactionService {
    public Credentials getCreds(String adress,String pass) throws IOException, CipherException;
    public ArrayList<String> ethAccounts() throws IOException;
    public TransactionReceipt sendtransaction(String from,String to,int value,String pass) throws IOException, CipherException, TransactionException, InterruptedException, ExecutionException;
    public BigDecimal ethBalance(String hash) throws IOException;
    public String getTransactionHash(String from,String to,int value,String pass) throws InterruptedException, ExecutionException, TransactionException, CipherException, IOException;
    public NewAccountIdentifier Newwallet(String pass ) throws IOException;
    public ArrayList<String> listPathWallet() throws IOException;

}
