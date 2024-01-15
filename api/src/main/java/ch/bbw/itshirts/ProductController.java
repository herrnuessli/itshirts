package ch.bbw.itshirts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    @GetMapping
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get a single product by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        } else {
            // Handle the case where the product is not found
            // This could be returning null, throwing an exception, or returning a default value
            return null; // Example placeholder
        }
    }

    // Create a new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // Update an existing product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Product not found with id " + id)); // Custom exception can be used
        product.setProductName(productDetails.getProductName());
        product.setDescription(productDetails.getDescription());
        product.setImage(productDetails.getImage());
        return productRepository.save(product);
    }

    // Delete a product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
