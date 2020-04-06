package com.talanweb3j.blockchain.services.impl;

import com.talanweb3j.blockchain.model.Block;
import com.talanweb3j.blockchain.model.Transaction;
import com.talanweb3j.blockchain.mongobase.Blockmongo;
import com.talanweb3j.blockchain.mongobase.Transactionmongo;
import com.talanweb3j.blockchain.services.MonotoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.admin.Admin;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.http.HttpService;


import java.io.*;
import java.math.BigInteger;
import java.util.ArrayList;

import static com.talanweb3j.blockchain.constants.Constants.*;

@Service
public class MonotoringServiceImpl implements MonotoringService {
    @Autowired
    Blockmongo blockmongo;
    @Autowired
    Transactionmongo transactionmongo;
    Web3j web3j = Web3j.build(new HttpService());
    Admin admin = Admin.build(new HttpService());

    @Override
    public String getClientVersion() throws IOException {
        return web3j.web3ClientVersion().send().getWeb3ClientVersion();
    }

    @Override
    public Credentials getCreds() throws IOException, CipherException {
        return WalletUtils.loadCredentials(
                "123",
                "/home/attia/Desktop/Blockchain/noeud4/keystore/UTC--2018-08-06T09-59-36.200035736Z--5f99702afcf650966d4d8ef96d241b04bd6dd75e");
    }

    @Override
    public BigInteger ethGetBlockByNumber() throws IOException {
        return web3j.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).send()
                .getBlock().getNumber();
    }

    @Override
    public ArrayList<String> ethAccounts() throws IOException {
        return (ArrayList<String>) web3j.ethAccounts().send().getAccounts();
    }

    @Override
    public BigInteger ethBlockNumber() throws IOException {
        return web3j.ethBlockNumber().send().getBlockNumber();
    }

    @Override
    public int ethProtocolVersion() throws IOException {
        return Integer.parseInt(web3j.ethProtocolVersion().send().getProtocolVersion().substring(2), 16);
    }

    @Override
    public BigInteger ethGetBlockByHash() throws IOException {
        return web3j.ethGetBlockByHash("0x6f9b9d7f74203ad08ed1e22a183140e32030a4c639117286ee0e0db07ceeb3bb", false).send().getBlock().getSize();
    }

    @Override
    public ArrayList<Block> listBlockDB() throws IOException {
        return (ArrayList<Block>) blockmongo.findAll();
    }

    @Override
    public ArrayList<Block> listBlock() throws IOException {
        ArrayList<Block> arrayBlock = new ArrayList<Block>();

        for (int i = 0; i < this.ethBlockNumber().intValue(); i++) {
            Block block = new Block();
            web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getParentHash();
            block.setDifficulty(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getDifficulty().longValue());
            block.setExtraData(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getExtraData());
            block.setGasLimit(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getGasLimit().longValue());
            block.setParentHash(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getParentHash());
            block.setGasUsed(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getGasUsed().longValue());
            block.setHash(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getHash());
            block.setLogsBloom(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getLogsBloom());
            block.setMiner(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getMiner());
            block.setMixHash(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getMixHash());
            block.setNonce(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getNonce().toString());
            block.setNumber(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getNumber().longValue());
            block.setReceiptsRoot(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getReceiptsRoot());
            block.setSha3Uncles(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getSha3Uncles());
            block.setSize(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getSize().intValue());
            block.setStateRoot(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getStateRoot());
            block.setTimestamp(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getTimestamp().longValue());
            block.setTotalDifficulty(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getTotalDifficulty().longValue());
            block.setTransactions(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getTransactions());
            block.setTransactionsRoot(web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getTransactionsRoot());
            block.setUncles((ArrayList<String>) web3j.ethGetBlockByNumber(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), true).send().getBlock().getUncles());

            arrayBlock.add(block);
        }
        return arrayBlock;
    }

    @Override
    public ArrayList<Transaction> listTransaction() throws IOException {

         ArrayList<Block> arrayBlock = this.listBlockDB();
        //ArrayList<Block> arrayBlock = this.listBlock();

        ArrayList<Transaction> arrayList = new ArrayList<Transaction>();
        System.out.println("array size" + arrayBlock.size());
        for (int i = 0; i < arrayBlock.size(); i++) {
            if (!(arrayBlock.get(i).getTransactions().isEmpty())) {
                for (int j = 0; j < arrayBlock.get(i).getTransactions().size(); j++) {
                    Transaction transaction = new Transaction();

                    transaction.setHash(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getHash());
                    transaction.setNonce(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getNonce().toString());
                    transaction.setBlockHash(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getBlockHash());
                    transaction.setBlockNumber(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getBlockNumber().longValue());
                    transaction.setTransactionIndex(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getTransactionIndex().intValue());
                    transaction.setFrom(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getFrom());
                    transaction.setTo(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getTo());
                    transaction.setValue(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getValue().longValue());
                    transaction.setGasPrice(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getGasPrice().longValue());
                    transaction.setGas(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getGas().longValue());
                    transaction.setInput(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getInput());
                    transaction.setCreates(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getCreates());
                    transaction.setPublicKey(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getPublicKey());
                    transaction.setRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getRaw());
                    transaction.setR(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getR());
                    transaction.setV(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getV());
                    transaction.setS(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getS());
                    transaction.setNonceRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getNonceRaw());
                    transaction.setBlockNumberRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getBlockNumberRaw());
                    transaction.setGasPriceRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getGasPriceRaw());
                    transaction.setGasRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getGasRaw());
                    transaction.setTransactionIndexRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getTransactionIndexRaw());
                    transaction.setValueRaw(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getValueRaw());
                    if (web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getChainId() == null) {
                        transaction.setChainId(null);
                    } else {
                        transaction.setChainId(web3j.ethGetTransactionByBlockNumberAndIndex(DefaultBlockParameter.valueOf(BigInteger.valueOf(i)), BigInteger.valueOf(j)).send().getTransaction().get().getChainId().toString());

                    }


                    arrayList.add(transaction);

                }
            }
        }

        return arrayList;


    }

    @Override
    public ArrayList<Transaction> listTransactionDB() throws IOException {
        return (ArrayList<Transaction>) this.transactionmongo.findAll();
    }


    @Override
    public BigInteger getNodenumber() throws IOException {
        return admin.netPeerCount().send().getQuantity();
    }

    public String executeCommand(String command) throws IOException, InterruptedException {

        StringBuffer output = new StringBuffer();
        Process p;
        p = Runtime.getRuntime().exec(command);
        p.waitFor();
        InputStreamReader in = new InputStreamReader(p.getInputStream());
        BufferedReader reader = new BufferedReader(in);
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line + "\n");
        }
        p.destroy();
        reader.close();
        return output.toString();

    }
    @Override
    public int getNodesCount() {
        File workDirectory = new File(WORK_ADDRESS);
        return ((workDirectory.list().length) - 6);
    }
    @Override
    public String createNode() throws IOException, InterruptedException {

        int nodeNumber = getNodesCount() + 1;
        String datadir = WORK_ADDRESS + "/noeud" + nodeNumber;
        System.out.println("Creating node ...");

        return (executeCommand("geth --datadir " + datadir + " --syncmode full" +
                " --bootnodes " + BOOT_NODE + " --networkid 100 init " + GENESIS));

    }
    @Override
    public String createAccount(int nodeNumber, String password) throws IOException, InterruptedException {

        String datadir = WORK_ADDRESS + "/node" + nodeNumber;
        System.out.println("Deleting File ...");
        executeCommand("rm " + WORK_ADDRESS + "/password");
        System.out.println("Making File ...");
        executeCommand("touch " + WORK_ADDRESS + "/password");

        System.out.println("Writing into file ...");
        BufferedWriter writer = new BufferedWriter(new FileWriter(WORK_ADDRESS + "/password"));
        writer.write(password);
        return (executeCommand("geth --datadir " + datadir + " --networkid 100 account new --password " + WORK_ADDRESS + "/password"));

    }
        @Override
    public String getEnode(int nodeNumber) throws IOException, InterruptedException {

        String datadir = WORK_ADDRESS + "/noeud" + nodeNumber;
        return (executeCommand("geth --datadir " + datadir + " --syncmode full --rpcport 810" + nodeNumber + " --rpc --rpcaddr 127.0.0.1 --port 3030" + nodeNumber +
                " --rpccorsdomain * --rpcapi personal,eth,net,db,web3,txpool,miner --bootnodes " + BOOT_NODE + " --networkid 100 --ipcdisable console --exec admin.nodeInfo.enode"));

    }
        @Override
    public String extractEnode(int nodeNumber) throws IOException, InterruptedException {

        String enode = getEnode(nodeNumber);
        String[] prefix = enode.split("@");
        String[] port = prefix[1].split("]");
        StringBuilder sb = new StringBuilder(prefix[0]);
        sb.insert(prefix[0].length(), "@[127.0.0.1]" + port[1]);
        System.out.println(sb.toString());
        return (sb.toString());

    }
        @Override
    public String nodeInfo(int nodeNumber) throws IOException, InterruptedException {

        String datadir = WORK_ADDRESS + "/noeud" + nodeNumber;
        return(executeCommand("geth --datadir "+datadir+" --syncmode full --rpcport 810"+nodeNumber+" --rpc --rpcaddr 127.0.0.1 --port 3030"+nodeNumber+
                " --rpccorsdomain * --rpcapi personal,eth,net,db,web3,txpool,miner --bootnodes "+BOOT_NODE+" --networkid 100 --ipcdisable console --exec admin.nodeInfo"));

    }


}