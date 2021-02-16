package internal

import (
	"html/template"
	"net/http"
)

type Handlers struct {
	db         *DBconn
	FileServer http.Handler
	Tmpl       *template.Template
}

func RouterInit() *http.ServeMux {
	handler := &Handlers{
		// db:         conn,
		FileServer: http.FileServer(http.Dir("../dist")),
	}
	r := http.NewServeMux()
	r.Handle("/", handler.FileServer)
	return r
}
