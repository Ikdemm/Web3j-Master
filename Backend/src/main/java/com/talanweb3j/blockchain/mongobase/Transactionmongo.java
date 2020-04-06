package com.talanweb3j.blockchain.mongobase;

import com.talanweb3j.blockchain.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Transactionmongo extends MongoRepository<Transaction,String> {
}
