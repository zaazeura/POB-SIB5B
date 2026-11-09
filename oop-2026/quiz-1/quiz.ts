// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

class Mario {
  hp: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: string;

  constructor() {
    this.hp = 1;
    this.speed = 5;
    this.positionX = 0;
    this.positionY = 0;
    this.invincible = false;
    this.currentForm = "mario";
  }

  superMushroom(): void {
    this.hp += 1;
    this.currentForm = "super mario";
    console.log(`${this.currentForm}. HP: ${this.hp}`);
  }

  fireFlower(): void {
    this.hp += 1;
    this.currentForm = "fire mario";
    console.log(`${this.currentForm}. HP: ${this.hp}`);
  }

  shootFireball(): void {
    console.log("Mario menembakkan bola api!");
  }

  superStar(): void {
    this.invincible = true;
    console.log("Mario sekarang kebal!");
  }

  getAttacked(): void {
    if (this.invincible) {
      console.log("Mario kebal terhadap serangan!");
    } else {
      this.hp -= 1;
      this.currentForm = "mario";
      console.log(`Mario diserang. HP: ${this.hp}`);
    }
  }

  moveRight(): void {
    this.positionX += this.speed;
    console.log(`Posisi X: ${this.positionX}`);
  }

  moveLeft(): void {
    this.positionX -= this.speed;
    console.log(`Posisi X: ${this.positionX}`);
  }
}

// INHERITANCE
class SuperMario extends Mario {
  superMushroom(): void {
    super.superMushroom();
  }
}

class FireMario extends Mario {
  shootFireball(): void {
    console.log("Fire Mario menembakkan bola api!");
  }
}

// POLYMORPHISME
class NormalMario extends Mario {
  shootFireball(): void {
    console.log("Mario tidak bisa menembakkan bola api!");
  }
}

// OBJECT
const mario = new Mario();
const superMario = new SuperMario();
const fireMario = new FireMario();
const normalMario = new NormalMario();

// PEMANGGILAN METHOD
mario.superMushroom();
mario.fireFlower();
mario.shootFireball();
mario.superStar();
mario.getAttacked();
mario.moveRight();
mario.moveLeft();
superMario.superMushroom();
