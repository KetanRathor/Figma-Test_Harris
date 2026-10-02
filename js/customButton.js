export function createButton({
  text = "",
  color = "primary",
  size = "sm",
  className = "",
  type = "button",
  icon = "",
  title = "",
  attributes = ""
}) {
  return `
    <button
      type="${type}"
      class="btn btn-${color} btn-${size} ${className}"
      title="${title}"
      ${attributes}
    >
      ${icon ? `<i class="${icon}"></i>` : ""}
      ${text}
    </button>
  `;
}