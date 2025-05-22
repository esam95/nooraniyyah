export const LETTERS = 
  [
    'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 
    'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 
    'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 
    'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ء', 'ي'
  ];

export const VOWELS = {
  fatha: ' َ',
  kasra: ' ِ',
  damma: ' ُ',
  fathateen: ' ً',
  kasrateen: ' ٍ',
  dammateen: ' ٌ',
}

export const VOWELSWITHOUTSPACE = {
  fatha: 'َ',
  kasra: 'ِ',
  damma: 'ُ',
  fathateen: 'ً',
  kasrateen: 'ٍ',
  dammateen: 'ٌ',
  sukoon: 'ْ',
}

export const LETTERWITHVOWELS = [
    { letter: 'أ', fatha: '1', kasra: '2', dammah: '3' },
    { letter: 'ب', fatha: '79', kasra: '80', dammah: '6' },
    { letter: 'ت', fatha: '52', kasra: '53', dammah: '54' },
    { letter: 'ث', fatha: '70', kasra: '71', dammah: '72' },
    { letter: 'ج', fatha: '25', kasra: '26', dammah: '27' },
    { letter: 'ح', fatha: '10', kasra: '11', dammah: '12' },
    { letter: 'خ', fatha: '16', kasra: '17', dammah: '18' },
    { letter: 'د', fatha: '49', kasra: '50', dammah: '51' },
    { letter: 'ذ', fatha: '67', kasra: '68', dammah: '69' },
    { letter: 'ر', fatha: '43', kasra: '44', dammah: '45' },
    { letter: 'ز', fatha: '61', kasra: '62', dammah: '63' },
    { letter: 'س', fatha: '58', kasra: '59', dammah: '60' },
    { letter: 'ش', fatha: '28', kasra: '29', dammah: '30' },
    { letter: 'ص', fatha: '55', kasra: '56', dammah: '57' },
    { letter: 'ض', fatha: '34', kasra: '35', dammah: '36' },
    { letter: 'ط', fatha: '46', kasra: '47', dammah: '48' },
    { letter: 'ظ', fatha: '64', kasra: '65', dammah: '66' },
    { letter: 'ع', fatha: '7', kasra: '8', dammah: '9' },
    { letter: 'غ', fatha: '13', kasra: '14', dammah: '15' },
    { letter: 'ف', fatha: '73', kasra: '74', dammah: '75' },
    { letter: 'ق', fatha: '19', kasra: '20', dammah: '21' },
    { letter: 'ك', fatha: '22', kasra: '23', dammah: '24' },
    { letter: 'ل', fatha: '37', kasra: '38', dammah: '39' },
    { letter: 'م', fatha: '82', kasra: '83', dammah: '84' },
    { letter: 'ن', fatha: '40', kasra: '41', dammah: '42' },
    { letter: 'ه', fatha: '4', kasra: '5', dammah: '6' },
    { letter: 'و', fatha: '76', kasra: '77', dammah: '78' },
    { letter: 'ء', fatha: '1', kasra: '2', dammah: '3' },
    { letter: 'ي', fatha: '31', kasra: '32', dammah: '33' }
];

export const LETTERWITHTANWEEN = [
    { letter: 'أ', fathateen: '82', kasrateen: '83', dammateen: '84' },
    { letter: 'ب', fathateen: '4', kasrateen: '5', dammateen: '6' },
    { letter: 'ت', fathateen: '31', kasrateen: '32', dammateen: '33' },
    { letter: 'ث', fathateen: '13', kasrateen: '14', dammateen: '15' },
    { letter: 'ج', fathateen: '58', kasrateen: '59', dammateen: '60' },
    { letter: 'ح', fathateen: '73', kasrateen: '74', dammateen: '75' },
    { letter: 'خ', fathateen: '67', kasrateen: '68', dammateen: '69' },
    { letter: 'د', fathateen: '34', kasrateen: '35', dammateen: '36' },
    { letter: 'ذ', fathateen: '16', kasrateen: '17', dammateen: '18' },
    { letter: 'ر', fathateen: '40', kasrateen: '41', dammateen: '42' },
    { letter: 'ز', fathateen: '22', kasrateen: '23', dammateen: '24' },
    { letter: 'س', fathateen: '25', kasrateen: '26', dammateen: '27' },
    { letter: 'ش', fathateen: '55', kasrateen: '56', dammateen: '57' },
    { letter: 'ص', fathateen: '28', kasrateen: '29', dammateen: '30' },
    { letter: 'ض', fathateen: '49', kasrateen: '50', dammateen: '51' },
    { letter: 'ط', fathateen: '37', kasrateen: '38', dammateen: '39' },
    { letter: 'ظ', fathateen: '19', kasrateen: '20', dammateen: '21' },
    { letter: 'ع', fathateen: '76', kasrateen: '77', dammateen: '78' },
    { letter: 'غ', fathateen: '70', kasrateen: '71', dammateen: '72' },
    { letter: 'ف', fathateen: '10', kasrateen: '11', dammateen: '12' },
    { letter: 'ق', fathateen: '64', kasrateen: '65', dammateen: '66' },
    { letter: 'ك', fathateen: '61', kasrateen: '62', dammateen: '63' },
    { letter: 'ل', fathateen: '46', kasrateen: '47', dammateen: '48' },
    { letter: 'م', fathateen: '1', kasrateen: '2', dammateen: '3' },
    { letter: 'ن', fathateen: '43', kasrateen: '44', dammateen: '45' },
    { letter: 'ه', fathateen: '79', kasrateen: '80', dammateen: '81' },
    { letter: 'و', fathateen: '7', kasrateen: '8', dammateen: '9' },
    { letter: 'ء', fathateen: '82', kasrateen: '83', dammateen: '84' },
    { letter: 'ي', fathateen: '52', kasrateen: '53', dammateen: '54' }
];