-- ràng buộc khóa ngoại và tùy chọn cho bảng users
ALTER TABLE "Carts"
ADD CONSTRAINT FK_Carts_Users
FOREIGN KEY ("userID")
REFERENCES "Users"(id)
ON DELETE CASCADE;

ALTER TABLE "ImageProfiles"
ADD CONSTRAINT FK_ImageProfiles_Users
FOREIGN KEY ("userID")
REFERENCES "Users"(id)
ON DELETE CASCADE;

ALTER TABLE "Orders"
ADD CONSTRAINT FK_Orders_Users
FOREIGN KEY ("userID")
REFERENCES "Users"(id)
ON DELETE CASCADE;

ALTER TABLE "OrderDetails"
ADD CONSTRAINT FK_OrderDetails_Users
FOREIGN KEY ("userID")
REFERENCES "Users"(id)
ON DELETE CASCADE;

ALTER TABLE "Reviews"
ADD CONSTRAINT FK_Reviews_Users
FOREIGN KEY ("userID")
REFERENCES "Users"(id)
ON DELETE CASCADE;

-- ràng buộc khóa ngoại và tùy chọn cho bảng products
ALTER TABLE "Carts"
ADD CONSTRAINT FK_Carts_Products
FOREIGN KEY ("productID")
REFERENCES "Products"(id)
ON DELETE CASCADE;

ALTER TABLE "Coupons"
ADD CONSTRAINT FK_Coupons_Products
FOREIGN KEY ("productID")
REFERENCES "Products"(id)
ON DELETE CASCADE;

ALTER TABLE "ImageProducts"
ADD CONSTRAINT FK_ImageProducts_Products
FOREIGN KEY ("productID")
REFERENCES "Products"(id)
ON DELETE CASCADE;

ALTER TABLE "OrderDetails"
ADD CONSTRAINT FK_OrderDetails_Products
FOREIGN KEY ("productID")
REFERENCES "Products"(id)
ON DELETE CASCADE;

ALTER TABLE "Reviews"
ADD CONSTRAINT FK_Reviews_Products
FOREIGN KEY ("productID")
REFERENCES "Products"(id)
ON DELETE CASCADE;

-- ràng buộc cho bảng categories
ALTER TABLE "Products"
ADD CONSTRAINT FK_Products_Categories
FOREIGN KEY ("categoryID")
REFERENCES "Categories"(id)
ON DELETE CASCADE;


-- ràng buộc cho bảng Orders
ALTER TABLE "OrderDetails"
ADD CONSTRAINT FK_OrderDetails_Orders
FOREIGN KEY ("orderID")
REFERENCES "Orders"(id)
ON DELETE cascade;

-- ràng buộc cho bảng paymentMethods
ALTER TABLE "Orders"
ADD CONSTRAINT FK_Orders_PaymentMethods
FOREIGN KEY ("paymentMethodID")
REFERENCES "PaymentMethods"(id)
ON DELETE CASCADE;

-- ràng buộc cho bảng ShippingMethods
ALTER TABLE "Orders"
ADD CONSTRAINT FK_Orders_ShippingMethods
FOREIGN KEY ("shippingMethodID")
REFERENCES "ShippingMethods"(id)
ON DELETE CASCADE;
