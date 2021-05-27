export const Format = {
  date: (date: string) =>
    new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(date)),
  slug: (text: string) => {
    const from = "àáäâẽèéëêìíïîõòóöôùúüûñ·/_,:;"
    const to = "aaaaeeeeeiiiiooooouuuun------"

    const newText = text.split('').map(
      (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))

    return newText
      .toString()                     // Cast to string
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                         // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-y-')           // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }
};

export const toPost = (slug: string) => `/post/${slug}`;
