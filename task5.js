/**
 * Función que evalúa una puntuación (0-11) y retorna un string con la calificación:
 * - "Perfect" para una puntuación de 11.
 * - "Excellent" para puntuaciones mayores a 8 (pero menores a 11).
 * - "Pass" para puntuaciones de 5 a 8.
 * - "Fail" para puntuaciones menores a 5.
 *
 * @param {number} score - La puntuación del estudiante.
 * @returns {string} - La calificación correspondiente.
 */
export function gradeScore(score) {
    if (score === 11) {
      return "Perfect";
    } else if (score > 8) {
      return "Excellent";
    } else if (score >= 5) {
      return "Pass";
    } else {
      return "Fail";
    }
  }