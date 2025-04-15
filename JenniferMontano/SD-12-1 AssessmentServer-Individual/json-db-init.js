import * as fs from 'fs'

const defaultDB = '{\n  "users": [\n    {\n      "id": 1,\n      "first_name": "Joshua",\n      "last_name": "Diaz",\n      "email": "j3@example.com"\n    },\n    {\n      "id": 2,\n      "first_name": "Song",\n      "last_name": "Gonzalez",\n      "email": "sgo@example.com"\n    },\n    {\n      "id": 3,\n      "first_name": "Milagro",\n      "last_name": "Juarez",\n      "email": "miljua23@example.com"\n    },\n    {\n      "id": 4,\n      "first_name": "Olivia",\n      "last_name": "Brown",\n      "email": "olibrown432@example.net"\n    },\n    {\n      "id": 5,\n      "first_name": "Alex",\n      "last_name": "Chen",\n      "email": "achen12@example.net"\n    }\n  ]\n}'

export function initDB() {
  fs.writeFile('./db.json', defaultDB, err => {
    if (err) {
      console.error(err)
    }
  })
}