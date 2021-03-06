export interface CreateBookDto {
  title?: string;
  author?: string;
  description?: string;
  ISBN?: string;
  price?: number;
  quantity?: number;
}

export type UpdateBookDto = Required<CreateBookDto>;
