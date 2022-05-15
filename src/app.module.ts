import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';
import { AuthorDto } from './entities/author.dto';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryDto } from './entities/category.dto';
import { PublisherService } from './publisher/publisher.service';
import { PublisherController } from './publisher/publisher.controller';
import { PublisherDto } from './entities/publisher.dto';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { BookDto } from './entities/book.dto';
import { BookFinesService } from './book-fines/book-fines.service';
import { BookFinesController } from './book-fines/book-fines.controller';
import { BookFinesDto } from './entities/book-fines.dto';
import { BorrowerDto } from './entities/borrower.dto';
import { BorrowerController } from './borrower/borrower.controller';
import { BorrowerService } from './borrower/borrower.service';
import { IssuedBookService } from './issued-book/issued-book.service';
import { IssuedBookController } from './issued-book/issued-book.controller';
import { IssuedBookDto } from './entities/issued-book.dto';
import { UserDto, UserController, UserService } from './user';
import { AuthModule } from './user/auth.module';
import { MediaDto } from './entities/media.dto';
import { MediaController } from './media/media.controller';
import MediaService from './media/media.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorDto,
      CategoryDto,
      PublisherDto,
      BookDto,
      BookFinesDto,
      BorrowerDto,
      IssuedBookDto,
      UserDto,
      MediaDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'konek_to_bookdb',
      entities: [
        AuthorDto,
        CategoryDto,
        PublisherDto,
        BookDto,
        BookFinesDto,
        BorrowerDto,
        IssuedBookDto,
        UserDto,
        MediaDto,
      ],
    // synchronize: true,
    // dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    AuthorController,
    CategoryController,
    PublisherController,
    BookController,
    BookFinesController,
    BorrowerController,
    IssuedBookController,
    UserController,
    MediaController,
  ],
  providers: [
    AuthorService,
    CategoryService,
    PublisherService,
    BookService,
    BookFinesService,
    BorrowerService,
    IssuedBookService,
    UserService,
    MediaService,
  ],
})
export class AppModule {}
