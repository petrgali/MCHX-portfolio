package main

import (
	"log"
	"net/http"
	"os"
	"spaAPI/internal"
	"time"
)

func main() {
	// db, err := dbInit(os.Getenv("DATABASE_URL"))
	// if err != nil {
	// 	log.Printf("database connection failed. Reason: %s", err.Error())
	// }
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("PORT set to default value `8080`. Reason: %s", "%PORT not set")
	}
	mux := internal.RouterInit()
	s := &http.Server{
		Addr:           ":" + port,
		Handler:        mux,
		ReadTimeout:    10 * time.Millisecond,
		WriteTimeout:   10 * time.Millisecond,
		MaxHeaderBytes: 1 << 20,
	}
	log.Printf("server is listening on port" + s.Addr)
	if err := s.ListenAndServe(); err != nil {
		log.Printf("server startup failed. Reason: %s", err.Error())
	}
}
