package com.talanweb3j.blockchain.controllers;

import com.talanweb3j.blockchain.model.Block;
import com.talanweb3j.blockchain.model.Transaction;
import com.talanweb3j.blockchain.mongobase.Blockmongo;
import com.talanweb3j.blockchain.mongobase.Transactionmongo;
import com.talanweb3j.blockchain.services.MonotoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("blockController")
public class BlockController {
    @Autowired
    Blockmongo blockmongo;
    @Autowired
    MonotoringService monotoringService;
    @Autowired
    Transactionmongo transactionmongo;

    @ResponseBody
    @GetMapping("getBlocks")
    public List<Block> saveInDb() throws IOException {
        Iterable<Block> iterable = monotoringService.listBlock();
        return blockmongo.saveAll(iterable);
    }
    @ResponseBody
    @GetMapping("getTransaction")
    public List<Transaction> saveInDbt() throws IOException {
        Iterable<Transaction> iterable=  monotoringService.listTransaction();
        return transactionmongo.saveAll(iterable);
    }
}
