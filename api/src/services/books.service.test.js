const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const spyGetAll = jest.fn();

const MongoLibStub = {
  getAll: () => spyGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for getBooks', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should reaturn a list book', async () => {
      // Arrage
      spyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(spyGetAll).toHaveBeenCalled();
      expect(spyGetAll).toHaveBeenCalledTimes(1);
      expect(spyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should reaturn a list book', async () => {
      // Arrage
      spyGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Harry Potter 2',
      }]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
