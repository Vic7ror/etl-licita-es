export class DateConverter {
  static convertToString(dateString: string): string {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses começam em 0
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }
}
