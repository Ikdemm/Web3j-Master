package com.talanweb3j.blockchain.services;

import com.talanweb3j.blockchain.model.Block;
import com.talanweb3j.blockchain.model.Transaction;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;

public interface MonotoringService {
    public String getClientVersion() throws IOException;
    public Credentials getCreds() throws IOException, CipherException;
    public BigInteger ethGetBlockByNumber() throws IOException;
    public ArrayList<String> ethAccounts() throws IOException;
    public BigInteger ethBlockNumber() throws IOException;
    public int ethProtocolVersion() throws IOException;
    public BigInteger ethGetBlockByHash() throws IOException;
    public ArrayList<Block> listBlockDB() throws IOException;
    public ArrayList<Block> listBlock() throws IOException;

    public ArrayList<Transaction> listTransaction() throws IOException;
    public ArrayList<Transaction> listTransactionDB() throws IOException;
    public BigInteger getNodenumber() throws IOException;

    public String extractEnode(int nodeNumber) throws IOException, InterruptedException;
    public String createAccount(int nodeNumber, String password) throws IOException, InterruptedException;
    public String nodeInfo(int nodeNumber) throws IOException, InterruptedException;
    public String getEnode(int nodeNumber) throws IOException, InterruptedException;
    public String createNode() throws InterruptedException, IOException;
    public int getNodesCount();
}
