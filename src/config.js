module.exports = {
	PORT: process.env.PORT || 8000,
	NODE_ENV: process.env.NODE_ENV || "development",
	API_KEY: process.env.API_KEY || "dummy-api-token",
	DB_URL:
		process.env.DB_URL ||
		"postgresql://dunder-mifflin:scranton@localhost/bookmarks",
};
