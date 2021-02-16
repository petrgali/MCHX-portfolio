package main

import (
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
)

type Handlers struct {
	db         *DBconn
	FileServer http.Handler
	Tmpl       *template.Template
}

func routerInit(conn *DBconn) *mux.Router {
	handler := &Handlers{
		db:         conn,
		FileServer: http.FileServer(http.Dir("../public")),
		Tmpl:       template.Must(template.ParseFiles("../public/index.html")),
	}
	r := mux.NewRouter()
	r.PathPrefix("/public/").Handler(http.StripPrefix("/public/", handler.FileServer))
	return r
}
