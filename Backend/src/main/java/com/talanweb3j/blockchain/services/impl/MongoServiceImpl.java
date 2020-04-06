package com.talanweb3j.blockchain.services.impl;

import com.talanweb3j.blockchain.model.Block;
import com.talanweb3j.blockchain.model.Transaction;
import com.talanweb3j.blockchain.mongobase.Blockmongo;
import com.talanweb3j.blockchain.mongobase.Transactionmongo;
import com.talanweb3j.blockchain.services.MonotoringService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class MongoServiceImpl {
    private static final Logger log =  LoggerFactory.getLogger(MongoServiceImpl.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    @Autowired
    MonotoringService monotoringService;
    @Autowired
    Blockmongo blockmongo;
    @Autowired
    Transactionmongo transaction;
    @Scheduled(fixedRate = 3000)
    public void savetoDB() throws IOException {
        log.info("Automatic Start");

        List<Block> block= monotoringService.listBlock();
        blockmongo.saveAll(block);
        log.info("saved Block to Mongo db");
        List<Transaction> transactions= monotoringService.listTransaction();
        transaction.saveAll(transactions);
        log.info("saved Transactions to Mongo db");

    }
}
