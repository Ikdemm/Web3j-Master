package com.talanweb3j.blockchain.mongobase;

import com.talanweb3j.blockchain.model.Block;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Blockmongo extends MongoRepository<Block,Long> {

}
