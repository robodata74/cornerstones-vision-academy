<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Admin Dashboard | Cornerstones Vision Academy</title>
  <meta name="description" content="CVA Bulletin administrative dashboard for managing school content and announcements.">

  <!-- Dark Bulletin Styles -->
  <link rel="stylesheet" href="../css/bulletin-dark.css">
</head>

<body class="bulletin-dark">

<!-- ================= HEADER ================= -->
<header class="dashboard-header">
  <div class="header-container">

    <a href="../index.html" class="logo-link">
      <img src="../images/cva-logo.png" class="logo-img" alt="Cornerstones Vision Academy Logo">
    </a>

    <nav class="main-navigation">
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="dashboard-dark.html" class="active">Dashboard</a></li>
        <li><a href="../contact.html">Contact</a></li>
      </ul>
    </nav>

  </div>
</header>

<!-- ================= MAIN DASHBOARD ================= -->
<main class="dashboard-container">

  <!-- Welcome -->
  <section class="dashboard-section">
    <h2>Welcome, Admin</h2>
    <div class="admin-alert success">
      You are logged in to the CVA Bulletin Administration Dashboard.
    </div>
  </section>

  <!-- Administration Table -->
  <section class="dashboard-section">
    <h2>School Administration</h2>

    <table class="dashboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th class="actions-col">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Valentino Achak Deng</td>
          <td>Principal</td>
          <td>valentino@cornerstonesvisionacademy.org</td>
          <td class="actions">
            <button class="btn-primary">Edit</button>
            <button class="btn-delete">Delete</button>
          </td>
        </tr>

        <tr>
          <td>Jane Doe</td>
          <td>Head of Academics</td>
          <td>jane.doe@cornerstonesvisionacademy.org</td>
          <td class="actions">
            <button class="btn-primary">Edit</button>
            <button class="btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Announcements -->
  <section class="dashboard-section">
    <h2>Announcements</h2>

    <button class="btn-feature" onclick="openModal()">
      + Add New Announcement
    </button>

    <!-- Modal -->
    <div id="announcementModal" class="modal">
      <div class="modal-content">

        <button class="close-btn" onclick="closeModal()" aria-label="Close modal">
          &times;
        </button>

        <h3>New Announcement</h3>

        <form id="announcementForm">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" required placeholder="Announcement title">

          <label for="content">Content</label>
          <textarea id="content" name="content" rows="5" required placeholder="Write announcement here"></textarea>

          <button type="submit" class="btn-primary">
            Save Announcement
          </button>
        </form>

      </div>
    </div>
  </section>

</main>

<!-- ================= FOOTER ================= -->
<footer class="dashboard-footer">
  <p>&copy; 2026 Cornerstones Vision Academy</p>
</footer>

<!-- ================= SCRIPTS ================= -->
<script>
  function openModal() {
    document.getElementById('announcementModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('announcementModal').style.display = 'none';
  }

  window.onclick = function (event) {
    const modal = document.getElementById('announcementModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
</script>

</body>
</html>
