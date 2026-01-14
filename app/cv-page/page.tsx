

export default function CVPage() {
  return (
		<main style={{ padding: "2rem" }}>
      <h1>CV Preview</h1>
      {/* PDF Preview */}
      <iframe
        src="/cv.pdf"
        width="100%"
        height="600px"
        style={{ border: "1px solid #ccc" }}
      />

      {/* Download Button */}
      <a
        href="/cv.pdf"
        download
        style={{
          display: "inline-block",
					margin: "auto",
          marginTop: "1rem",
          padding: "10px 30px",
          background: "#0070f3",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Download PDF
      </a>
    </main>
  );
}

