import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  
  public colorMenu ="primary";
  public displayImagen ="data:image/jpeg;base64,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";

  public displayImagenSecondary = null;

  constructor() {}
}
