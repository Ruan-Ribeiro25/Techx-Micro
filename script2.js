function previewImage(input) {
    var fileInput = document.getElementById('fileInput');
    var fileLabel = document.getElementById('fileLabel');
    var imagePreview = document.getElementById('imagePreview');

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };

    reader.readAsDataURL(file);

    fileLabel.innerHTML = 'Imagem Selecionada';
  }

  function addComment() {
    var userName = document.getElementById("userName").value;
    var userPhoto = document.getElementById("imagePreview").src;
    var userComment = document.getElementById("userComment").value;

    // Obter os comentários existentes do armazenamento local
    var existingComments = JSON.parse(localStorage.getItem("timeline")) || [];

    // Adicionar novo comentário à lista
    var newComment = {
      userName: userName,
      userPhoto: userPhoto,
      userComment: userComment
    };

    existingComments.push(newComment);

    // Salvar a lista atualizada no armazenamento local
    localStorage.setItem("timeline", JSON.stringify(existingComments));

    // Atualizar a linha do tempo na página
    updateTimeline();

    // Limpar os campos do formulário após adicionar à linha do tempo
    document.getElementById("userName").value = "";
    document.getElementById("fileInput").value = "";
    document.getElementById("fileLabel").innerHTML = "Selecionar Imagem";
    document.getElementById("imagePreview").src = "#";
    document.getElementById("imagePreview").style.display = "none";
    document.getElementById("userComment").value = "";
  }

  function updateTimeline() {
    var timeline = document.getElementById("timeline");

    // Limpar a linha do tempo atual
    timeline.innerHTML = "";

    // Obter os comentários do armazenamento local
    var existingComments = JSON.parse(localStorage.getItem("timeline")) || [];

    // Adicionar os comentários à linha do tempo
    existingComments.forEach(function(comment) {
      var li = document.createElement("li");
      li.className = "timeline-item";

      var img = document.createElement("img");
      img.src = comment.userPhoto;
      img.alt = comment.userName;

      var div = document.createElement("div");
      div.className = "timeline-item-content";
      div.innerHTML = "<h3>" + comment.userName + "</h3><p>" + comment.userComment + "</p>";

      li.appendChild(img);
      li.appendChild(div);

      timeline.appendChild(li);
    });
  }

  // Carregar os comentários armazenados quando a página é carregada
  window.onload = function() {
    loadTimeline();
  };

  function loadTimeline() {
    updateTimeline();
  }