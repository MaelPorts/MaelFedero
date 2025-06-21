export function renderProjectForm(container, onSubmit) {
  const form = document.createElement('form');
  form.id = 'projectForm';

  // Title input
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.placeholder = 'Project Title';
  titleInput.required = true;

  // Description textarea
  const descInput = document.createElement('textarea');
  descInput.id = 'description';
  descInput.placeholder = 'Project Description';
  descInput.required = true;

  // Repo link input
  const repoInput = document.createElement('input');
  repoInput.type = 'url';
  repoInput.id = 'repo';
  repoInput.placeholder = 'Repository Link (https://...)';
  repoInput.required = true;

  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Add Project';

  // Append all elements to the form
  form.appendChild(titleInput);
  form.appendChild(descInput);
  form.appendChild(repoInput);
  form.appendChild(submitBtn);

  // Handle form submission
  form.onsubmit = function(e) {
    e.preventDefault();
    onSubmit({
      title: titleInput.value,
      description: descInput.value,
      repo: repoInput.value
    });
    form.remove();
  };

  container.appendChild(form);
}