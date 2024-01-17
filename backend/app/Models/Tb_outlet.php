<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tb_outlet extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_outlet',
        'alamat',
        'tlp',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
