# Rest API Book Shelf JavaScript

Final Project Back End Development JavaScript  
Submission Bookshelf API

---

## Kriteria Proyek

### 1. Aplikasi menggunakan port 9000

Aplikasi harus berjalan di port `9000`. Jika tidak bisa, ganti sementara, lalu ubah kembali ke `9000` saat submission.

---

### 2. Aplikasi dijalankan dengan perintah `npm run start`

Tambahkan script berikut pada `package.json`:

```json
{
  "name": "submission",
  "scripts": {
    "start": "node src/server.js"
  }
}
```

Gunakan `nodemon` hanya saat development dengan script tambahan:

```json
{
  "scripts": {
    "start": "node src/server.js",
    "start-dev": "nodemon src/server.js"
  }
}
```

---

### 3. API dapat menyimpan buku

- **Method:** `POST`
- **URL:** `/books`
- **Body Request:**

```json
{
  "name": "string",
  "year": 2021,
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": 100,
  "readPage": 50,
  "reading": true
}
```

- **Contoh Response Sukses (`201`):**

```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "1L7ZtDUFeGs7VlEt"
  }
}
```

- **Contoh Response Gagal:**

Jika `name` tidak dikirim:
```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

Jika `readPage > pageCount`:
```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

---

### 4. API dapat menampilkan seluruh buku

- **Method:** `GET`
- **URL:** `/books`

- **Response:**

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

Jika tidak ada buku:
```json
{
  "status": "success",
  "data": {
    "books": []
  }
}
```

---

### 5. API dapat menampilkan detail buku

- **Method:** `GET`
- **URL:** `/books/{bookId}`

- **Jika tidak ditemukan (`404`):**
```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

- **Jika ditemukan (`200`):**
```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "aWZBUW3JN_VBE-9I",
      "name": "Buku A Revisi",
      "year": 2011,
      "author": "Jane Doe",
      "summary": "Lorem Dolor sit Amet",
      "publisher": "Dicoding",
      "pageCount": 200,
      "readPage": 26,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-05T06:14:28.930Z",
      "updatedAt": "2021-03-05T06:14:30.718Z"
    }
  }
}
```

---

### 6. API dapat mengubah data buku

- **Method:** `PUT`
- **URL:** `/books/{bookId}`

- **Request Body:** *(Sama seperti saat menambah buku)*

- **Response Gagal (tanpa `name`):**
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```

- **Response Gagal (`readPage > pageCount`):**
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- **Response Gagal (ID tidak ditemukan):**
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

- **Response Sukses:**
```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

---

### 7. API dapat menghapus buku

- **Method:** `DELETE`
- **URL:** `/books/{bookId}`

- **Jika ID tidak ditemukan:**
```json
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

- **Jika berhasil dihapus:**
```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
