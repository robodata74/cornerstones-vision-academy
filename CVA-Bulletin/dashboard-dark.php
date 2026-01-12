<?php
// ===================== SESSION ENFORCEMENT =====================
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ================= META ================= -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard | Cornerstones Vision Academy</title>
  <meta name="description" content="CVA Bulletin administrative dashboard for managing official school announcements and administrative content.">

  <!-- ================= STYLES ================= -->
  <link rel="stylesheet" href="../css/bulletin-dark.css">
</head>

<body class="bulletin-dark">

<!-- ================= HEADER ================= -->
<header class="dashboard-header" role="banner">
  <div class="header-container">
    <!-- Logo -->
    <a href="../index.html" class="logo-link" aria-label="Cornerstones Vision Academy Home">
      <img src="../images/cva-logo.png" class="logo-img" alt="CVA Logo" loading="lazy">
    </a>

    <!-- Navigation -->
    <nav class="main-navigation" role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="dashboard-dark.php" class="active" aria-current="page">Dashboard</a></li>
        <li><a href="../contact.html">Contact</a></li>
        <li><a href="../backend/logout.php">Logout</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- ================= MAIN CONTENT ================= -->
<main class="dashboard-container" role="main">

  <!-- Welcome Section -->
  <section class="dashboard-section" aria-labelledby="welcome-heading">
    <h2 id="welcome-heading">Welcome, <?= htmlspecialchars($_SESSION['username']) ?></h2>
    <div class="admin-alert success" role="status">
      You are logged in to the CVA Bulletin Administration Dashboard.
    </div>
  </section>

  <!-- Administration Table -->
  <section class="dashboard-section" aria-labelledby="admin-table-heading">
    <h2 id="admin-table-heading">School Administration</h2>
    <div class="table-wrapper">
      <table class="dashboard-table" role="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col" class="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valentino Achak Deng</td>
            <td>Principal</td>
            <td><a href="mailto:valentino@cornerstonesvisionacademy.org">valentino@cornerstonesvisionacademy.org</a></td>
            <td class="actions">
              <button type="button" class="btn-primary" aria-label="Edit administrator">Edit</button>
              <button type="button" class="btn-delete" aria-label="Delete administrator">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>Head of Academics</td>
            <td><a href="mailto:jane.doe@cornerstonesvisionacademy.org">jane.doe@cornerstonesvisionacademy.org</a></td>
            <td class="actions">
              <button type="button" class="btn-primary" aria-label="Edit administrator">Edit</button>
              <button type="button" class="btn-delete" aria-label="Delete administrator">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Announcements Section -->
  <section class="dashboard-section" aria-labelledby="announcements-heading">
    <h2 id="announcements-heading">Announcements</h2>

    <button
      type="button"
      class="btn-feature"
      onclick="openModal()"
      aria-haspopup="dialog"
      aria-controls="announcementModal"
    >
      + Add New Announcement
    </button>

    <!-- Modal -->
    <div
      id="announcementModal"
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div class="modal-content">
        <button
          type="button"
          class="close-btn"
          onclick="closeModal()"
          aria-label="Close announcement form"
        >&times;</button>

        <h3 id="modal-title">New Announcement</h3>

        <form
          id="announcementForm"
          method="POST"
          action="../backend/announcement-create.php"
          novalidate
        >
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              maxlength="150"
              placeholder="Announcement title"
            >
          </div>

          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              id="content"
              name="content"
              rows="5"
              required
              placeholder="Write announcement here"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary">Save Announcement</button>
        </form>
      </div>
    </div>
  </section>

</main>

<!-- ================= FOOTER ================= -->
<footer class="dashboard-footer" role="contentinfo">
  <p>&copy; 2026 Cornerstones Vision Academy. All rights reserved.</p>
</footer>

<!-- ================= SCRIPTS ================= -->
<script>
const modal = document.getElementById('announcementModal');

function openModal() {
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// Close modal on outside click
window.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

// Close modal on Escape key
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

// AJAX form submission for dynamic updates
document.getElementById('announcementForm').addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(this);
  fetch('../backend/announcement-create.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(resp => {
    if(resp.status === 'success') location.reload();
    else alert(resp.message || "Failed to save announcement");
  })
  .catch(err => alert("Network error: " + err));
});
</script>

</body>
</html>
