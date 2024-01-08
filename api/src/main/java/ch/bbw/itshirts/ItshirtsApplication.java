package ch.bbw.itshirts;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ItshirtsApplication {

	private static final Logger log = LoggerFactory.getLogger(ItshirtsApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ItshirtsApplication.class, args);
	}

}
