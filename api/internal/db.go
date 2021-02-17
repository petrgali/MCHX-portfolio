package internal

import (
	"database/sql"

	_ "github.com/lib/pq"
)

type DBconn struct {
	Conn *sql.DB
}

func dbInit(url string) (*DBconn, error) {
	db := &DBconn{}
	conn, err := sql.Open("postgres", url)
	if err != nil {
		return nil, err
	}
	db.Conn = conn
	db.create()
	db.Conn.SetMaxOpenConns(20)
	db.Conn.SetMaxIdleConns(20)
	return db, db.Conn.Ping()
}

func (db *DBconn) create() {
	//create DB schema//
}
