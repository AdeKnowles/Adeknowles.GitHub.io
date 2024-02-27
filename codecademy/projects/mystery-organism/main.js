// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate () {
      let newDnaBase = returnRandBase();
      let mutateBaseNum = Math.ceil(Math.random()*15);
      while (this.dna[mutateBaseNum] === newDnaBase){
        newDnaBase = returnRandBase();
      };
      this.dna[mutateBaseNum] = newDnaBase;
    },
    compareDNA (object) {
      let count = 0;
      for (let i = 1; i <= 15; i++) {
        if (object.dna[i] === this.dna[i]){
          count++;
        }
      }
      let percentage = Math.round(100 * count/15);
      console.log(`specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${percentage}% DNA in common`);
    },
    willLikelySurvive () {
      let count = 0;
      for (i = 1; i <= 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          count++;
        }
      }
      if (count / 15 > 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}
let pAequorSamples = [];
for (j = 1; j <= 30; j++) {
//  let j = 1;
  let subject = pAequorFactory(j,mockUpStrand());
  while (subject.willLikelySurvive() === false){
    subject = pAequorFactory(j,mockUpStrand());
  }
  pAequorSamples.push(subject);
}


console.log(pAequorSamples);