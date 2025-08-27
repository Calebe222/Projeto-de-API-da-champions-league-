import * as HttpResponse from "../utils/https-helper"
import * as repository from "../repositories/clubs-repository"

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};